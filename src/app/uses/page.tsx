import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Uses",
  description: "Here's what tech I'm currently using for work.",
}

export default function UsesPage() {
  return (
    <section>
      <h1 className="mb-8 text-3xl font-bold">Uses</h1>
      <p className="mb-8 mt-2 text-foreground">
        Here is what tech I am currently using for work.
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        <h3 id="pc">PC</h3>
        <ul>
          <li>CPU: Intel Core i3-7100</li>
          <li>RAM: 8GB DDR4 2400 MT/s</li>
          <li>GPU: Nvidia GeForce GT 1030</li>
          <li>MOBO: MSI H110 PRO-VD PLUS MS-7A15</li>
        </ul>
        <h3 id="pc-equipment">PC Equipment</h3>
        <ul>
          <li>Monitor: Samsung S24R350 LED 24 Inch IPS 75Hz</li>
          <li>Keyboard: Fantech MaxFit M61 Mechanical</li>
          <li>Mouse: Armaggeddon Mikoyan Foxbat-III Wireless</li>
          <li>Speaker: Sonicbar 150P</li>
        </ul>
        <h3 id="os">Operating System</h3>
        <ul>
          <li>OS: Arch Linux</li>
          <li>WM: i3</li>
        </ul>
        <h3 id="coding">Coding</h3>
        <ul>
          <li>Editor: Neovim</li>
          <li>Theme: One Nord</li>
          <li>Shell: Fish</li>
          <li>Terminal: Kitty</li>
        </ul>
        <h3 id="software">Software</h3>
        <ul>
          <li>Google Chrome</li>
          <li>Postman</li>
          <li>GIMP</li>
          <li>Bitwarden</li>
          <li>Spotify</li>
        </ul>
        <h3 id="phone">Phone</h3>
        <ul>
          <li>Sony Xperia XZ2</li>
          <li>Xiaomi Redmi Note 8</li>
        </ul>
      </div>
    </section>
  )
}
