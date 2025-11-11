export default function Header() {
  return (
    <header className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      <div>
        <select className="border rounded-md py-2 px-3">
          <option>Español</option>
          <option>English</option>
        </select>
      </div>
      <div className="flex items-center space-x-8 text-sm">
        <div className="flex items-center space-x-4">
          <span>Blanco y Negro <input type="radio" name="filter1" /></span>
          <span>Modo Shrek <input type="radio" name="filter1" /></span>
          <span>Saturar <input type="radio" name="filter1" /></span>
          <span>Sepia <input type="radio" name="filter1" /></span>
          <span>Ninguno <input type="radio" name="filter1" defaultChecked /></span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Desenfoque <input type="radio" name="filter2" /></span>
          <span>Calidad aleatoria <input type="radio" name="filter2" /></span>
          <span>Ninguno <input type="radio" name="filter2" defaultChecked /></span>
        </div>
      </div>
    </header>
  );
}
