type TableComponentProps = {
    data: Record<string, unknown>;
}

const TableComponent = ({ data }: TableComponentProps) => {
    return (
        <div>
            <h1>Table Component</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default TableComponent;