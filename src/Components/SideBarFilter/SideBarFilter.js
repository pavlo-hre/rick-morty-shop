import React, {useState} from "react"
import {createFilter} from "../../Helpers/filterHelper";
import {Button, Form} from "react-bootstrap";
import {filterData, resetFilter} from "../../Redux/Actions/product";
import {connect} from "react-redux";


const SideBarFilter = ({filterData, resetFilter}) => {
  const gender = ["Male", "Female", "unknown", "Genderless"]
  const status = ["Alive", "unknown", "Dead"]
  const species = ["Human", "Alien", "Humanoid", "unknown", "Poopybutthole",
    "Mytholog", "Animal", "Vampire", "Robot", "Cronenberg", "Disease", "Parasite"
  ]

  // const [filterSettings, setFilterSettings] = useState({})
  // const isFilterActive = !!Object.keys(filterSettings).length
  // console.log(filterSettings)
  // const onReset = () => {
  //   setFilterSettings({})
  //   resetFilter()
  // }
  // const onFilter = () => {
  //   filterData(filterSettings)
  // }

  const renderCheckbox = (filters, name) => filters.map((item, index) => (
    <div
      key={item + index}
      className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        id={item + index}
        value={item}
        name={name}
        onInput={(e) => {
          filterData(e.target)
        }}
      />
      <label className="custom-control-label" htmlFor={item + index}>
        {item}
      </label>
    </div>
  ))
  return (
    <Form>
      <fieldset>
        <legend>Gender</legend>
        {renderCheckbox(gender, 'gender')}
      </fieldset>
      <fieldset>
        <legend>Status</legend>
        {renderCheckbox(status, 'status')}
      </fieldset>
      <fieldset>
        <legend>Species</legend>
        {renderCheckbox(species, 'species')}
      </fieldset>
      {/*<Button*/}
      {/*  type='button'*/}
      {/*  variant='success'*/}
      {/*  // onClick={onFilter}*/}
      {/*  // disabled={!isFilterActive}*/}
      {/*>*/}
      {/*  Filter*/}
      {/*</Button>*/}

      {/*<Button*/}
      {/*  type='reset'*/}
      {/*  variant='warning'*/}
      {/*  // onClick={onReset}*/}
      {/*>*/}
      {/*  Reset*/}
      {/*</Button>*/}
    </Form>
  )
}

export default connect(null, {filterData, resetFilter})(SideBarFilter)

