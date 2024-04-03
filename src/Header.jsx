const Header = ({ selectedTeam, teamMemberCount }) => {
  return (
    <header>
      <div className="container">
        <div className="row justify-content-center mt-3 mb-4">
          <div className="col-12">
            <h1><strong>Team Member Allocation</strong></h1>
            <h3>{selectedTeam} has {teamMemberCount} {teamMemberCount === 1 ? "member" : "members"}</h3>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
