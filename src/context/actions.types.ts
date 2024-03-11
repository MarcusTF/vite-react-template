import { actionsGenerator } from "./actions"
import { ReducerActionProps } from "./reducer.types"

export type ImmerDispatch = (action: ReducerActionProps) => void
export type Actions = ReturnType<typeof actionsGenerator>
