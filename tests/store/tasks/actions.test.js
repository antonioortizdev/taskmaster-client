import { describe, expect, it } from 'vitest'
import { FIND_TASKS, SET_TASKS } from 'src/constants'
import { store } from 'src/store'

describe('Task store actions', () => {
  it('finds tasks', async () => {
    const tasks = [{ id: 1, name: 'Task 1' }, { id: 2, name: 'Task 2' }];
    const filters = { name: 'Task' };

    await store.dispatch(FIND_TASKS, filters);

    expect(store.commit).toHaveBeenCalledWith(SET_TASKS, tasks);
  })
})