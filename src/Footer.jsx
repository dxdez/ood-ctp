const Footer = () => {

  var today = new Date();

  return (
    <footer className="container-fluid bg-light">
      <div className="row justify-content-center mt-5">
        <div className="col-12">
          <div className="p-3 text-center">Team Member Allocation - {today.getFullYear()}</div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
