import MainService from 'services/MainService'
import { INote } from 'utils/interfaces/notes'

class NoteService extends MainService {
  constructor() {
    super('/notes')
  }

  getAllNotes(page: number) {
    return this
      .getAll(`_page=${page}&_limit=4`)
      .then(response => ({
        notes: response.data,
        total: parseInt(response.headers['x-total-count'])
      }))
  }

  addNote(note: INote) {
    return this
      .add(note)
      .then(response => ({ note: response.data, status: response.status }))
  }

  updateNote(note: INote) {
    return this
      .update(note.id!, note)
      .then(response => response.data)
  }
  
  removeNote(id: string) {
    return this
      .remove(id)
      .then(response => response)
      .catch(error => error.response)
  }
}

export default new NoteService()