
import React, {Component} from 'react';


class LoginForm extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div>
        <form>
          <label>
            Login ID:
            <input type="text" name="id" />
          </label>
          <label>
            Password:
            <input type="text" name="password" />
          </label>
        </form>
        <input type="submit" value="Submit" />
      </div>

    );
  }
}

export default LoginForm;
