import { Link } from 'react-router-dom';

export default function LogoSection() {
    return (
        <div className="logo_section">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12">
                     <div className="logo"><Link to="index.html">hristina&apos;s craft world</Link></div>
                  </div>
               </div>
            </div>
         </div>
    );
}