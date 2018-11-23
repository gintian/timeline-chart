export interface TimeGraphRange {
    start: number
    end: number
}

export interface TimeGraphModel {
    id: string
    name: string
    totalRange: number
    rows: TimeGraphRowModel[]
}

export interface TimeGraphRowModel {
    range: TimeGraphRange
    states: TimeGraphRowElementModel[]
}

export interface TimeGraphRowElementModel {
    range: TimeGraphRange
    label: string
}