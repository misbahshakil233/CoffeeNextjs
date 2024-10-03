import Navbar from '@/components/Navbar';
import './globals.css';


export const metadata = {
  title: 'My App',
  description: 'A great app with Next.js 13',
};

// Define type for children as React.ReactNode
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Navbar at the top */}
        <main>{children}</main> {/* All page content will go here */}
        
      </body>
    </html>
  );
};

export default RootLayout;
