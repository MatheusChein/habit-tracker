import addIcon from '../assets/images/iconplus.svg';
import trashIcon from '../assets/images/icontrash.svg';
import '../styles/habitpage.scss'
import { Link } from 'react-router-dom'
import { Habit } from '../components/Habit';
import { useState } from 'react';
import { useAuth } from "../hooks/useAuth";

interface Day {
  day: number;
  isDone: boolean
}

interface HabitType {
  name: string;
  doneDays: Day[]
}

export function HabitPage() {
  const { user } = useAuth();
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
            <div className="selector">
              <select name="" id="">
                <option value="">Janeiro</option>
                <option value="">Fevereiro</option>
                <option value="">Março</option>
                <option value="">Abril</option>
                <option value="">Maio</option>
                <option value="">Junho</option>
                <option value="">Julho</option>
                <option value="">Agosto</option>
                <option value="">Setembro</option>
                <option value="">Outubro</option>
                <option value="">Novembro</option>
                <option value="">Dezembro</option>
              </select>            
            </div>
          </div>
        </header>


        <div className="subheader">
          <div className="functions">
            
            <img src={ addIcon } alt="add habit button"/>
            <img src={ trashIcon } alt="remove habit button"/>
            
          </div>

          <div className="daysheader">

            DIA 
            <div className="days">
              <span>1</span><span>2</span>
              <span>3</span><span>4</span>
              <span>5</span><span>6</span>
              <span>7</span><span>8</span>
              <span>9</span><span>10</span>
              <span>11</span><span>12</span>
              <span>13</span><span>14</span>
              <span>15</span><span>16</span>
              <span>17</span><span>18</span>
              <span>19</span><span>20</span>
              <span>21</span><span>22</span>
              <span>23</span><span>24</span>
              <span>25</span><span>26</span>
              <span>27</span><span>28</span>
              <span>29</span><span>30</span>
              <span>31</span>                  
            </div>
          
          </div>
        </div>
        <Habit name='Beber água'/>
        <Habit name='Beber água'/>
        <Habit name='Beber água'/>
        <Habit name='Beber água'/>
        <Habit name='Beber água'/>
        <Habit name='Beber água'/>
        <Habit name='Beber água'/>
        {/* {habits.map(habit => (
          <Habit name={habit.name}/>
        ))} */}

      </main>
      <footer>
        <div>
          <div className="user-info">
            <img src={user?.avatar} alt={user?.name} />
            <span>{user?.name}</span>
          </div>
          <div className="createdby">
            Created by Matheus Chen and Luiz Gustavo Frota
          </div>
        </div>
      </footer>
    </div>
  )
}