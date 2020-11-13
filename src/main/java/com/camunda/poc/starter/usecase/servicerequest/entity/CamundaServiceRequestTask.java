package com.camunda.poc.starter.usecase.servicerequest.entity;

import com.camunda.poc.starter.usecase.renewal.entity.CamundaTask;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity(name="camunda_sr_task")
public class CamundaServiceRequestTask {

	public CamundaServiceRequestTask(){};
	public CamundaServiceRequestTask(long srId, String taskId){
	}
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(nullable=false)
    @JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
    private ServiceRequestEntity serviceRequest;
    public ServiceRequestEntity getServiceRequest() { return serviceRequest; }
    public void setServiceRequest(ServiceRequestEntity serviceRequest){
        this.serviceRequest = serviceRequest;
    }

    @ManyToOne
    @JoinColumn(nullable=false)
    @JsonIdentityInfo(generator=ObjectIdGenerators.PropertyGenerator.class, property="id")
    private CamundaTask task;
    public CamundaTask getTask() { return task; }
    public void setTask(CamundaTask task){
        this.task = task;
    }

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date created;

    public long getId(){
    	return id;
    }
}
