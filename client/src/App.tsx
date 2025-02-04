import "./App.css";
// import NavBar from "./components/NavBar.tsx";
import { Outlet } from "react-router-dom";
import AddEvent from "./components/ui/AddEvent.tsx";
import {CircleDollarSign} from 'lucide-react'

function App() {
  localStorage.setItem("auth-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5OTQ5ZjdhOTQ0N2QxMDY5N2M5ZDJkIn0sImlhdCI6MTY4Nzc2NzU0M30.XZtV5XxVuluXyBroeUU2DL1EfHA8aD-H6m1pf2_AqCs");
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
    <div className='w-full'>
      {/* <NavBar/> */}
      <div className="w-fit m-auto">
        <AddEvent title="expense" type="Economic">
          <CircleDollarSign className="size-10 m-auto"/>
        </AddEvent>
        <AddEvent title="earning" type="Economic">
          <CircleDollarSign className="size-10 m-auto"/>
        </AddEvent>
        <AddEvent title="good work" type="Valuation">
          <CircleDollarSign className="size-10 m-auto"/>
        </AddEvent>
        <AddEvent title="bad work" type="Valuation">
          <CircleDollarSign className="size-10 m-auto"/>
        </AddEvent>
      </div>
      {/* <Example open={modalIsOpen}>
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                   {/* <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" /> 
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div className="text-base font-semibold text-gray-900">
                    Deactivate account
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to deactivate your account? All of your data will be permanently removed.
                      This action cannot be undone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                // onClick={() => setOpen(false)}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Deactivate
              </button>
              <button
                type="button"
                data-autofocus
                // onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div> 
      </Example> */}
      {/* <div className={`fixed z-30 left-0 top-0 bg-black/50 w-screen h-screen  ${modalIsOpen?'block`':'hidden'}`} onClick={()=> setModalIsOpen(false)}/> */}
      <Outlet />
    </div>
     
  </>
  )
}

export default App
