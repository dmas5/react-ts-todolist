import { Item } from "./item"

export interface MyProp {
    task: Item,
    toggleEdit: (id: number) => void,
    removeItem: (id: number) => void
  }
export interface MyPropEdit {
    task: Item,
    toggleEdit: (id: number)=> void,
    saveItem: (item: Item) => void
  }