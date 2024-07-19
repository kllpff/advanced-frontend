// 1 - page address, 2 scroll position
export type ScrollSchema = Record<string, number>

export interface UISchema {
  scroll: ScrollSchema
}
