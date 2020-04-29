import React from "react"
import {Button, Form} from "react-bootstrap"
import {filterData, resetFilters} from "../../Redux/Actions/filter"
import {connect} from "react-redux"
import {getFilterSettings} from "../../Redux/Selectors/selectors"


const SideBarFilter = ({filterData, resetFilters, filter}) => {

  const gender = ["Male", "Female", "unknown", "Genderless"]
  const status = ["Alive", "unknown", "Dead"]
  const species = ["Human", "Alien", "Humanoid", "unknown", "Poopybutthole",
    "Mytholog", "Animal", "Vampire", "Robot", "Cronenberg", "Disease", "Parasite"
  ]

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
        onInput={e => {
          filterData({name: e.target.name, value: e.target.value})
        }}
      />
      <label
        className="custom-control-label"
        htmlFor={item + index}
      >
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
      <Button
        type='reset'
        variant='outline-danger'
        className='mt-2'
        onClick={resetFilters}
      >
        Сбросить фильтр
      </Button>
    </Form>
  )
}

const mapStateToProps = state => ({
  filter: getFilterSettings(state)
})

const mapDispatchToProps = {filterData, resetFilters}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarFilter)

