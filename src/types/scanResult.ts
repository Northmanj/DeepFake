export interface ScanResult {
    id: string
    filename: string
    fileUrl: string
    score: number // 0-100 DeepFake likehood
    createdAt: string
}