import './styles.scss'

interface HabitProps {
  name: string;
}

export function Habit({ name }: HabitProps) {
  return (
    <div className='habit'>
      <h2>{name}</h2>    
      <div className="checkboxed">
      
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        
      </div>
    
    </div>
    
    
  )
}