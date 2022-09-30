<template>
    <div class="container mt-5">
        <div class="row d-flex justify-content-center align-items-center">
            <div class="col-md-6">
                <form id="regForm">
                    <h1 id="register">Multi Step Form In Vue 3</h1>
                    <div class="all-steps" id="all-steps"> <span class="step"></span> <span class="step"></span> <span
                            class="step"></span> <span class="step"></span> </div>
                    <div class="tab">
                        <h3>Step 1:</h3>
                        <div class="form-group">
                            <label class="control-label">First Name</label>
                            <input v-model="formData.firstName" maxlength="100" type="text" class="form-control"
                                placeholder="Enter First Name" />
                        </div>
                        <div class="form-group">
                            <label class="control-label">Last Name</label>
                            <input v-model="formData.lastName" maxlength="100" type="text" class="form-control"
                                placeholder="Enter Last Name" />
                        </div>
                    </div>
                    <div class="tab">
                        <h3>Step 2:</h3>
                        <div class="form-group">
                            <label class="control-label">Middle Name</label>
                            <input v-model="formData.middleName" maxlength="200" type="text" class="form-control"
                                placeholder="Enter Middle Name" />
                            <span></span>
                        </div>
                    </div>
                    <div class="tab">
                        <h3>Step 3:</h3>
                        <div class="form-group">
                            <label class="control-label">Date Of birth</label>

                            <div class="form-group">
                                <label class="control-label">Select Date</label>
                                <select @change="handleChange()" v-model="selectedDate" class="form-control" name="date"
                                    id="cars">
                                    <option v-for="(date, index) in date" :value="date" :key="index">{{date}}</option>
                                    <option value="" selected>--Date--</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label class="control-label">Select Month</label>
                                <select @change="handleChange()" v-model="selectedMonth" class="form-control"
                                    name="date" id="cars">
                                    <option v-for="(month, index) in month" :value="month" :key="index">{{month}}
                                    </option>
                                    <option value="" selected>--Month--</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="control-label">Select Year</label>
                                <select @change="handleChange()" v-model="selectedYear" class="form-control" name="date"
                                    id="cars">
                                    <option v-for="(year, index) in year" :value="year" :key="index">{{year}}</option>
                                    <option value="" selected>--Year--</option>
                                </select>
                            </div>
                            <div v-if="this.showHideFlag">
                                Form Data submitted is below:
                                {{formData}}
                            </div>
                        </div>
                        <!-- <div v-if="this.showHideFlag">
                        Form Data submitted is below:
                        {{formData}}
                    </div> -->
                    </div>

                    <div class="thanks-message text-center" id="text-message"> <img
                            src="https://i.imgur.com/O18mJ1K.png" width="100" class="mb-4">
                        <h3>Thanks for submitting form!</h3> <span>We will contact you shortly!</span>
                        {{formData}}
                    </div>
                    <div style="overflow:auto;" id="nextprevious">
                        <div style="float:right;"> <button type="button" id="prevBtn"
                                onclick="nextPrev(-1)">Previous</button>
                            <button type="button" id="nextBtn" onclick="nextPrev(1)">Next</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { date, month, year } from '../const.js';
export default {
    data() {
        return {
            formData: {
                firstName: "",
                lastName: "",
                middleName: "",
                dateOfBirth: "",
            },
            showHideFlag: false,
            date: date,
            month: month,
            year: year,
            selectedDate: "",
            selectedMonth: "",
            selectedYear: ""
        }
    },
    methods: {
        handleChange() {
            this.formData.dateOfBirth = this.selectedDate + "/" + this.selectedMonth + "/" + this.selectedYear;
        }
    }
}
</script>
 
