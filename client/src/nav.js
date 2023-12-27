function Nav() {
  const types = [
    "Houses",
    "Apartments",
    "Office Spaces",
    "Townhouses",
    "Lands",
  ];
  return (
    <>
      <nav>
        <div className="bars">
          <div className="navbar">
            <div className="each">
              <p>REALTY</p>
              <p>Contact</p>
              <p>Careers</p>
              <p>Help & FAQ</p>
              <p>Terms</p>
            </div>
            <div className="each">
              <p>CATEGORIES</p>
              {types.map((i) => (
                <p>{i}</p>
              ))}
            </div>
            <div className="each">
              <p>FOR SALE</p>
              {types.map((i) => (
                <p>{i} for sale</p>
              ))}
            </div>
            <div className="each">
              <p>RENTALS</p>
              {types.map((i) => (
                <p>{i} for rent</p>
              ))}
            </div>
          </div>
          <div className="settings">
            <h1>Settings</h1>
          </div>
        </div>

        <div className="last">
          Based on information from The MLS CLAW as of (date the MLS data was
          obtained).All data, including all measurements and calculations of
          area, is obtained from various sources and has not been, and will not
          be, verified by broker or MLS. All information should be independently
          reviewed and verified for accuracy. Properties may or may not be
          listed by the office/agent presenting the information.
        </div>
      </nav>
    </>
  );
}

export default Nav;
