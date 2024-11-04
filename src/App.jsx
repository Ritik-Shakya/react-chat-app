import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import FriendsList from "./pages/FriendsList"
import About from "./pages/About"
import User from "./pages/User"
import Layout from "./components/Layout"
import GlobalStyles from "./styles/GlobalStyles"
import Welcome from "./pages/Welcome"
import ProtectedRoute from "./components/ProtectedRoute"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"
import Friend from "./components/Friend"

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:0,
    }
  }
})
function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="" element={
          <ProtectedRoute><Layout /></ProtectedRoute>
          }>

       
      <Route path="/" element={<Home />}/>
      <Route path="friendList/:friendId" element={<Friend />}/>
      <Route path="friendList" element={<FriendsList />}/>
      <Route path="about" element={<About/>}/>
      <Route path="user" element={<User/>} />
         </Route>
         <Route path="welcome" element={<Welcome />}/>

      </Routes>
    </BrowserRouter>
    <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: { duration: 3000 },
              error: { duration: 5000 },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "var(--color-grey-0)",
                color: "var(--color-grey-700)",
              },
            }}
          />
    </QueryClientProvider></>
  )
}

export default App

