
export default function Home() {

    let today = new Date().toLocaleString() + '';
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

  return (
    <>
      <header>
        {date} / {month} / {year}
        <h1>Cultivation Diary</h1>
        <span>15/08/2023</span>
        <h2>Bubbla Kush</h2>
        <h2>38 dias</h2>
        <h2>Vegetativo</h2>
      </header>
      <main>
        
      </main>
    </>
  )
}
