import LoadingScreenProvider from "./loadingScreenContext"

const AppWrapper = ({children}) => {
    return(
        <LoadingScreenProvider>
            {children}
        </LoadingScreenProvider>
    )
}

export default AppWrapper