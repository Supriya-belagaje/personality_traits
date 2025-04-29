export default function Header() {
    return (
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold flex items-center">
            <i className="fas fa-user-shield mr-2"></i> PersonaScan Pro
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:opacity-80">Home</a></li>
              <li><a href="#" className="hover:opacity-80">About</a></li>
              <li><a href="#" className="hover:opacity-80">API</a></li>
              <li><a href="#" className="hover:opacity-80">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  