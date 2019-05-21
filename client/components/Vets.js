import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getVets } from "../store/vet"

export class Vets extends Component {
  constructor () {
    super()
  }

  componentDidMount () {
    this.props.loadVets()
  }

  render () {
    const vets = this.props.vets
    return (
      <main>
        <AddCampus />
        <ul>
          {vets.map(vet => {
            return (
              <li key={vet.id}>
                <h1>
                  {vet.name}
                </h1>
                <p>
                  {vet.profile}
                </p>
                <img src={vet.picture} />
              </li>
          )
          })}
        </ul>
      </main>
    )
  }

}

const mapStateToProps = (state) => ({
  vets: state.vet.vets
})

const mapDispatchToProps = (dispatch) => ({
  loadVets: () => dispatch(getVets()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Vets)
