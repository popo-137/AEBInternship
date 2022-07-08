import {makeAutoObservable} from "mobx";

export default class ApplicationSite {
    constructor() {
        this._applications = []
        this._universitys = []
        this._degrees = []
        this._insts = []
        this._selectedDegree = {}
        this._selectedUniversity = {}
        this._selectedInst = {}
        this._totalCount = 0
        makeAutoObservable(this)
    }

    setUniversitys(universitys) {
        this._universitys = universitys
    }
    setDegrees(degrees) {
        this._degrees = degrees
    }
    setSelectedDegree(degree) {
        this._selectedDegree = degree
    }

    setSelectedUniversity(university) {
        this._selectedUniversity = university
    }
    setApplications(applications) {
        this._applications = applications
    }

    setIntsts(insts) {
        this._insts = insts
    }
    setSelectedInst(inst) {
        this._selectedInst = inst
    }

    setTotalCount(count) {
        this._totalCount = count
    }


    get applications() {
        return this._applications
    }
    get totalCount() {
        return this._totalCount
    }
    get universitys() {
        return this._universitys
    }
    get degrees() {
        return this._degrees
    }
    get insts() {
        return this._insts
    }
    get selectedUniversity() {
        return this._selectedUniversity
    }
    get selectedDegree() {
        return this._selectedDegree
    }
    get selectedInst() {
        return this._selectedInst
    }
}