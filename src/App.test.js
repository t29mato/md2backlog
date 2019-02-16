import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme from 'enzyme';
import { shallow, mount, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import TextField from '@material-ui/core/TextField';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('textareaに文字を入力できること', () => {
  const wrapper = shallow(<App />);
  const input = wrapper.find('.markdown').simulate(
    'change',
    { target: { markdown: 'changed' } }
  );

  // expect(wrapper.state.markdown).toEqual('hello');
  // テスト方法なぞ
});

