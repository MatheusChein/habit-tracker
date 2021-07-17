import addIcon from '../assets/images/iconplus.svg';
import trashIcon from '../assets/images/icontrash.svg';
import '../styles/habitpage.scss'
import { Link } from 'react-router-dom'
import { Habit } from '../components/Habit';
import { useState } from 'react';

interface Day {
  day: number;
  isDone: boolean
}

interface HabitType {
  name: string;
  doneDays: Day[]
}

export function HabitPage() {
  const [habits, setHabit] = useState<HabitType[]>([])
  

  return (
    <div id="habitpage">
      <main>

        <header>
          
          <Link to="/">
            <h1>
              Habit <span>tracker</span>
            </h1>
          </Link>
          <div className="months_selection">
            MÊS 
            <select name="" id="">
              <option value="">Janeiro</option>
              <option value="">Janeiro</option>
              <option value="">Janeiro</option>
              <option value="">Janeiro</option>
              <option value="">Janeiro</option>
              <option value="">Janeiro</option>
            </select>
            <span>1 2 3 4 5 6 7 8 9 10 11 12</span>
          </div>
        </header>


        <div className="subheader">
          <div className="functions">
            
            <img src={ addIcon } alt="add habit button"/>
            <img src={ trashIcon } alt="remove habit button"/>
            
          </div>

          <div className="days">

            DIA <span>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31</span>

          <input type="checkbox"/>
          </div>
        </div>
        <Habit name='teste'/>
        {/* {habits.map(habit => (
          <Habit name={habit.name}/>
        ))} */}

      </main>
      <footer>
        <div>
          <div className="user-info">
            INFO USUÁRIO
          </div>
          <div className="createdby">
            Created by Matheus Chen and Luiz Gustavo Frota
          </div>
        </div>
      </footer>
    </div>
  )
}