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
      <div className="prose">
        <h3 id="pc">PC</h3>
        <ul>
          <li>CPU: Intel Core i3-7100</li>
          <li>RAM: 16GB DDR4 2400 MT/s</li>
          <li>MOBO: MSI H110 PRO-VD PLUS MS-7A15</li>
        </ul>
        <h3 id="pc-equipment">PC Equipment</h3>
        <ul>
          <li>Monitor: Samsung S24R350 LED 24 Inch IPS 75Hz</li>
          <li>Keyboard: Fantech MaxFit M61 Mechanical</li>
          <li>Mouse: Logitech M590</li>
          <li>Speaker: Sonicbar 150P</li>
        </ul>
        <h3 id="os">Operating System</h3>
        <ul>
          <li>OS: NixOS</li>
          <li>WM: Hyprland</li>
        </ul>
        <h3 id="coding">Coding</h3>
        <ul>
          <li>Editor: Neovim</li>
          <li>Theme: One Nord</li>
          <li>Shell: Fish</li>
          <li>Terminal: Foot</li>
        </ul>
        <h3 id="software">Software</h3>
        <ul>
          <li>TMUX</li>
          <li>fzf</li>
          <li>Google Chrome</li>
          <li>Insomnia</li>
          <li>Bitwarden</li>
          <li>etc.</li>
        </ul>
        <h3 id="phone">Phone</h3>
        <ul>
          <li>Sony Xperia XZ2 Premium</li>
          <li>Samsung Galazy A53</li>
        </ul>
      </div>
    </section>
  )
}
