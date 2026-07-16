

const Container = ({children , className}) => {
    return (
        <div className={`max-w-330 px-3 lg:px-0 mx-auto ${className}`}>{children}</div>
    )
}

export default Container