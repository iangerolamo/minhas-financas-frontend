import Card from '../components/card';

function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6" style={ {position : 'relative', left: '300px'} }>
          <div className="bs-docs-section">
            <Card title="Login">
    	        Meu cartão
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;