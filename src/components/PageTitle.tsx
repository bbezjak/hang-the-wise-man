interface PageTitleProps {
    title: string;
}

export const PageTitle = ({title}: PageTitleProps) => {

    return (
        <div className="page-title-container">
            <h1 className="page-title">{title}</h1>
        </div>
    )
}