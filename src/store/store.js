import { todo} from "../redux/counterSlice"
import { configureStore } from "@reduxjs/toolkit"

export const store= configureStore(
    {
      reducer:{
        todo:todo
     
      }
    }
  )