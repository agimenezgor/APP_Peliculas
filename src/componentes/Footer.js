import React from 'react';

class Footer extends React.Component {
    render(){
        return (
            <footer className="bg-secondary d-flex justify-content-center align-items-center" style={{minHeight: "7vh"}}>
              <div className="text-warning">
                <h3>Copyright © 2020 Álvaro Giménez - Design: Álvaro Giménez</h3>
              </div>
            </footer>)
    }
}
export default Footer;