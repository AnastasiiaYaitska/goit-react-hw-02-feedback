import { Component } from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { FeedBackField } from './FeedBackField/FeedBackField';
import { Statistic } from './Statistic/Statistic';
import { Section } from './Section/Section';


export class App extends Component {

  state = {
  good: 0,
  neutral: 0,
  bad: 0
}

  
  onLeaveFeedback = (statName) => {
    this.setState(prevState => {
      return { [statName]: prevState[statName] + 1}
    })
  };

  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad
  };
  
  countPositiveFeedbackPercentage = () => {   
      return this.state.good * 100 / this.countTotalFeedback()   
  };

  render() {
    
    return (
      <Layout>
        <Section title= "Please live feedback">
        <FeedBackField onLeaveFeedback={this.onLeaveFeedback}
          options={this.state} />
        </Section>
        
        <Section title="Statistic">
        <Statistic good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
        </Section>

        <GlobalStyle/>
      </Layout>
    );
  }
};


FeedBackField.protoType = {
  onLeaveFeedback: PropTypes.func.isRequired,
options: PropTypes.shape({
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
}).isRequired,
};

Statistic.protoType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};