import React from 'react'
import UnionTypes from './0203-union-types/UnionTypes'
import TypesInterface from './types-interfaces/TypesInterfaces';
import Arrays from './0205-arrays/Arrays';
import Any from './0206-any/Any';
import NullUndefined from './0207-null-undefined/NullUndefined';
import InstanceofClass from './0301-instanceof/Instanceof';
import Interfaces from './0302-interfaces/Interfaces';
import EventsCallback from './0303-eventsCallback/EventsCallback';
import Generic from './0304-generic/Generic';

function App() {

  return (
    <>
      <UnionTypes/>
      <TypesInterface/>
      <Arrays/>
      <Any/>
      <NullUndefined/>
      <InstanceofClass/>
      <Interfaces/>
      <EventsCallback/>
      <Generic/>
    </>
  )
}

export default App
