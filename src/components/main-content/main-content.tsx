
export const MainContent = ({Children}:{Children: () => JSX.Element}) => {
    return <main className="container">
        <Children />
    </main>
}