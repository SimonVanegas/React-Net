import React, { SyntheticEvent } from 'react'

interface Props {
  onPortfolioDelete: (e: SyntheticEvent) => void;
  portfolioValue: string;
}

const DeletePorfolio = ({onPortfolioDelete, portfolioValue}: Props) => {
  return (
    <form onSubmit={onPortfolioDelete} >
      <input hidden={true} value={portfolioValue} readOnly/>
      <button>X</button>
    </form>
  )
}

export default DeletePorfolio