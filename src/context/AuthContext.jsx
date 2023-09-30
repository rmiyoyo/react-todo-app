import { useState, useContext, createContext, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');

    // Remove the unused function 'getUsername'

    useEffect(() => {
        // storing user state
        const temp = JSON.stringify(user);
        localStorage.setItem('username', temp);
    }, [user]);

    const login = (user) => setUser(user);
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Add PropTypes validation for the 'children' prop
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useAuthContext = () => useContext(AuthContext);
