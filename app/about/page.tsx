
export default function Page() {
  const date = new Date().toString()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="p-5">
        Next Revalidation test: {date}
      </h1> 
    </main>
  )
}