import './styles.scss'

interface HabitProps {
  name: string;
}

export function Habit({ name }: HabitProps) {
  return (
    <h1 className='habit'>{name}</h1>
  )
}