export default function AppLoading() {
  return (
    <div className="flex justify-center items-center p-6 min-h-full">
      <div className="text-center" role="status" aria-label="Loading">
        <div className="mx-auto border-2 border-muted border-t-foreground rounded-full size-5 animate-spin" />
        <p className="mt-3 text-muted-foreground text-sm">Loading...</p>
      </div>
    </div>
  )
}