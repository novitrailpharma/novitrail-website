import React, { useState, useMemo } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

type Medication = {
	productName: string;
	brandEquivalent: string;
	therapeuticClass: string;
	ndc: string;
	strength: string;
	size: string;
	form: string;
	prescribingInfo: string;
	medicationGuide: string;
};

type MedicationTableProps = {
	data: Medication[];
	itemsPerPage: number;
};

const MedicationTable: React.FC<MedicationTableProps> = ({ data, itemsPerPage }) => {
	const [sortConfig, setSortConfig] = useState<{ key: keyof Medication | "", direction: "asc" | "desc" | "" }>({ key: "", direction: "" });

	const handleSort = (column: keyof Medication) => {
		let direction: "asc" | "desc" = "asc";
		if (sortConfig.key === column && sortConfig.direction === "asc") {
			direction = "desc";
		}
		setSortConfig({ key: column, direction });
	};

	const sortedData = useMemo(() => {
		if (!sortConfig.key) return data;

		return [...data].sort((a, b) => {
			const aValue = a[sortConfig.key as keyof Medication] || "";
			const bValue = b[sortConfig.key as keyof Medication] || "";

			if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
			if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
			return 0;
		});
	}, [data, sortConfig]);

	const rowsToFill = itemsPerPage - data.length;

	const headers = [
		{ key: "productName", label: "Product Name" },
		{ key: "brandEquivalent", label: "Brand Equivalent" },
		{ key: "therapeuticClass", label: "Therapeutic Class" },
		{ key: "ndc", label: "NDC" },
		{ key: "strength", label: "Strength" },
		{ key: "size", label: "Size" },
		{ key: "form", label: "Form" },
		{ key: "prescribingInfo", label: "Prescribing Info" },
		{ key: "medicationGuide", label: "Medication Guide" },
	];

	return (
		<div className="w-full overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200">
			<table className="w-full min-w-full divide-y divide-gray-200">
				<thead className="bg-novitrail-blue text-white">
				<tr>
					{headers.map(({ key, label }) => (
						<th
							key={key}
							scope="col"
							onClick={() => handleSort(key as keyof Medication)}
							className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide cursor-pointer hover:bg-novitrail-blue/90 transition-colors"
						>
							<div className="flex items-center space-x-1">
								<span>{label}</span>
								{sortConfig.key === key && (
									sortConfig.direction === "asc" ? (
										<ArrowUp className="h-4 w-4 opacity-70" />
									) : (
										<ArrowDown className="h-4 w-4 opacity-70" />
									)
								)}
							</div>
						</th>
					))}
				</tr>
				</thead>
				<tbody className="bg-white divide-y divide-gray-200">
				{sortedData.map((item, index) => (
					<tr
						key={index}
						className="hover:bg-novitrail-orange/10 transition-all group"
					>
						<td className="px-6 py-4 whitespace-normal text-sm font-medium text-novitrail-blue group-hover:text-novitrail-orange max-w-md">
							{item.productName}
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
							{item.brandEquivalent}
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
							{item.therapeuticClass}
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
							{item.ndc}
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
							{item.strength}
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
							{item.size}
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
							{item.form}
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 underline text-blue-500 cursor-pointer hover:text-novitrail-orange">
							{item.prescribingInfo}
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 underline text-blue-500 cursor-pointer hover:text-novitrail-orange">
							{item.medicationGuide}
						</td>
					</tr>
				))}
				{Array.from({ length: rowsToFill }).map((_, index) => (
					<tr key={`empty-${index}`} className="h-12">
						<td colSpan={9} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"></td>
					</tr>
				))}
				</tbody>
			</table>
		</div>
	);
};

export default MedicationTable;
