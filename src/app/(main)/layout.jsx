
import Navbar from '../components/shared/Navbar';

const MainLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default MainLayout;