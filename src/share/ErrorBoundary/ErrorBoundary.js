import {Component} from 'react';

import s from './ErrorBoundary.module.scss'

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
      return { hasError: true };
    }
  
    render() {
      if (this.state.hasError) {
        // Можно отрендерить запасной UI произвольного вида
        return <h1 className={s.root}>Ошибка загрузки.<br /> Перезапустите страницу позднее.</h1>;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary