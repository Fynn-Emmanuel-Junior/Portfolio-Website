export default function Navbar() {
   
    return (
        <div className="navbar" style={{width: '60%', height: '30px'}}>
            <div style={{width: '100%'}}>
                <ul className="list" style={{display: 'flex', justifyContent: 'space-evenly', listStyleType: 'none', width: '100%', marginTop: '10px'}}>
                    <li>
                        <a href="###" className="active">
                            home
                        </a>
                    </li>
                    <li>
                        <a href="###">
                            about
                        </a>
                    </li>
                    <li>
                        <a href="###">
                            services
                        </a>
                    </li>
                    <li>
                        <a href="###">
                            work
                        </a>
                    </li>
                    <li>
                        <a href="###">
                            blog
                        </a>
                    </li>
                    <li>
                        <a href="###">
                            contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}