'use strict'
import { Item } from './item'
import Project from './project'
import DomDisplay from './dom_display'
import Interface from './interface'
import Util from './util'

const projectList = localStorage.getObj('project-list')
console.log(projectList)
if (projectList) {
  Project.load()
} else {
  const test = Item('Add items to your todo list', new Date('2020-02-01'))

  const test2 = Item('Add another project', new Date('2020-03-01'))

  const test3 = Item('test', new Date('2020-04-01'))

  const defaultProject = Project.create('Default Project')

  defaultProject.addItems([test, test2, test3])

  Project.create('Test project')
}
DomDisplay.refresh()

document
  .getElementById('new-project-btn')
  .addEventListener('click', Interface.newButton)

document.getElementById('new-todo-btn').addEventListener('click', Interface.newButton)

console.log(
  document.getElementById('project-list').getElementsByClassName('select-btn')
)
document
  .getElementById('project-list')
  .getElementsByClassName('select-btn')
  .item(0)
  .classList.add('active-btn')
