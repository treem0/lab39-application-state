import React from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { useDispatch, useSelector } from 'react-redux';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/emojiActions';
import { getFace } from '../selectors/emojiSelector';


const Moods = () => {
  const dispatch = useDispatch();
  const emojiFace = useSelector(getFace);
  const coffees = useSelector(state => state.coffees);
  const snacks = useSelector(state => state.snacks);
  const naps = useSelector(state => state.naps);
  const studies = useSelector(state => state.studies);

  return (
    <>
      <Controls>
        <button onClick={() => dispatch(drinkCoffee())}>coffee - {coffees}</button>
        <button onClick={() => dispatch(eatSnack())}>snacks - {snacks}</button>
        <button onClick={() => dispatch(takeNap())}>naps - {naps}</button>
        <button onClick={() => dispatch(study())}>studies - {studies}</button>
      </Controls>
      <Face emoji={emojiFace} />
    </>
  );
};

export default Moods;
