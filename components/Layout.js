export default function Layout({ children }) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-1">
          {children}
        </div>
      </div>
    );
  }
  