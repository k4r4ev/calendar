import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import { createEvent, deleteEvent, updateEvent } from '../actions/actions';
import { connect } from 'react-redux';
import '../stylesheets/modal.css';

interface State {
  text: String
}

interface Props {
  update: Number
  createEvent: Function
  date: Date
  updateEvent: Function
  hide: any
  deleteEvent: Function
  event: any
}

class Modal extends React.Component<Props, State> {
  months: Array<String>;

  constructor(props: Props) {
    super(props);
    this.state = {
      text: '',
    };
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
      'October', 'November', 'December'];
  }

  save = () => {
    if (this.props.update === 0) {
      if (this.state.text.length !== 0) {
        this.props.createEvent({
          date: new Date(this.props.date),
          text: this.state.text,
        });
      }
    } else {
      this.props.updateEvent({
        date: new Date(this.props.date),
        text: this.state.text,
      });
    }
    this.props.hide();
  };

  delete = () => {
    console.log(new Date(this.props.date).toDateString());
    this.props.deleteEvent(new Date(this.props.date).toDateString());
    this.props.hide();
  };

  handleChangeEventText = (event: any) => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <div className="modal">
        <div className="title">
          {this.props.date.getDate() + ' ' + this.months[this.props.date.getMonth()]}
        </div>
        <textarea className="textarea" onChange={this.handleChangeEventText} autoFocus={true}
                  defaultValue={this.props.event} />
        <div className="footer">
          <IconButton aria-label="check" color="primary" onClick={this.save}>
            <CheckIcon fontSize="large" className="whiteIcon" />
          </IconButton>
          <IconButton aria-label="delete" color="primary" onClick={this.delete}>
            <DeleteIcon fontSize="large" className="whiteIcon" />
          </IconButton>
          <IconButton aria-label="close" color="primary" onClick={this.props.hide}>
            <CloseIcon fontSize="large" className="whiteIcon" />
          </IconButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store: { events: any }) => {
  return {
    events: store.events,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    createEvent: (event: any) => dispatch(createEvent(event)),
    updateEvent: (event: any) => dispatch(updateEvent(event)),
    deleteEvent: (date: any) => dispatch(deleteEvent(date)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
